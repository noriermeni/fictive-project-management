import React, {RefObject, useState} from "react";
import _ from "lodash";
import classNames from "classnames";
import {DirectionalHint} from "@fluentui/react/lib/Callout";
import {Icon, ProgressIndicator, useTheme} from "@fluentui/react";
import {getProjectHeaderClassNames} from "./projectHeader.style";
import {formatDate} from "../../utils/dateFormatter";
import {calculatePercentageOfProgress} from "../../utils/calculation";
import Title from "../Title/title.component";
import UsersList from "../UsersList/usersList.component";
import Wrapper from "../layout/Wrapper/wrapper.component";
import IconButton from "../IconButton/iconButton.component";
import Switcher from "../Boards/Switcher/switcher.component";
import InformationBox from "../InformationBox/informationBox.component";
import SettingsFieldWrapper from "../SettingsField/settingsFieldWrapper.component";
import CustomPanelWrapper from "../CustomPanelWrapper/customPanelWrapper.component";
import {ProjectType} from "../../types/Project/project.type";

interface Props extends ProjectType {
    headerContainerRef: RefObject<HTMLDivElement>;
    headerHeight?: number;

    handleCollapsedHeader(value: boolean): void;
}

const ProjectHeader = (props: Props) => {
    const [collapseHeader, setCollapseHeader] = useState<boolean>(false);
    const [showNotesPanel, setShowNotesPanel] = useState<boolean>(false);
    const [showAttachmentsPanel, setShowAttachmentsPanel] = useState<boolean>(false);
    const {
        headerContainerRef,
        name,
        employees,
        description,
        created_by,
        created_at,
        finish_date,
        headerHeight,
        notes,
        attachment
    } = props;
    const {palette} = useTheme();
    const {
        container,
        innerContainer,
        projectInformation,
        projectName,
        boardSettings,
        iconSettings,
        marginInline,
        informationColor,
        collapseIconContainer,
        collapseIcon,
        rotateCollapseIcon,
        collapsedContainer
    } = getProjectHeaderClassNames({palette, headerHeight, collapseHeader});

    const informationPanel = () => {
        return (
            <InformationBox title={name ? name : ""} className={iconSettings}
                            directionalHint={DirectionalHint.topAutoEdge}>
                <Title className={informationColor} text={description}/>
                <div>
                    <SettingsFieldWrapper className={informationColor} title={`Due date`}>
                        <Title size={'sm'} text={_.isNil(finish_date) ? '-' : formatDate(finish_date)}/>
                    </SettingsFieldWrapper>
                    <SettingsFieldWrapper className={informationColor} title={`Created at`}>
                        <Title size={'sm'} text={_.isNil(created_at) ? '-' : formatDate(created_at)}/>
                    </SettingsFieldWrapper>
                    <SettingsFieldWrapper className={informationColor} title={`Created by`}>
                        <Title size={'sm'}
                               text={_.isString(created_by) ? created_by : `${created_by?.first_name} ${created_by?.last_name}`}/>
                    </SettingsFieldWrapper>
                </div>
            </InformationBox>
        )
    }

    return (
        <div className={classNames({
            [container]: true,
            [collapsedContainer]: collapseHeader
        })} ref={headerContainerRef}>
            <Wrapper>
                <CustomPanelWrapper minimizeNotesPanel={() => {
                    setShowNotesPanel(false);
                    setShowAttachmentsPanel(false);
                }} notes={notes}
                                    attachments={attachment} showNotesPanel={showNotesPanel}
                                    showAttachmentsPanel={showAttachmentsPanel}/>
            </Wrapper>
            <ProgressIndicator
                styles={{progressBar: {backgroundColor: palette.themeDarker}, itemProgress: {paddingTop: 0}}}
                title={`Tasks progress ${props.evaluation}%`} barHeight={10}
                percentComplete={calculatePercentageOfProgress(props.evaluation)}/>
            <Wrapper className={innerContainer}>
                <div className={collapseIconContainer}>
                    <IconButton onClick={() => {
                        props.handleCollapsedHeader(!collapseHeader)
                        setCollapseHeader(!collapseHeader)
                    }} className={classNames({
                        [collapseIcon]: true,
                        [rotateCollapseIcon]: collapseHeader
                    })} icon={'ChevronDownMed'}/>
                </div>
                <div className={boardSettings}>
                    {informationPanel()}
                    <div className={projectInformation}>
                        <Title className={projectName} size={'xl'} text={name}/>
                        <Title className={projectName} text={description}/>
                    </div>
                </div>
                <div className={boardSettings}>
                    <SettingsFieldWrapper className={marginInline} title={`Files`}>
                        <Icon className={classNames({
                            [iconSettings]: true
                        })} iconName={'Library'}
                              onClick={() => {
                                  setShowAttachmentsPanel(!showAttachmentsPanel)
                                  setShowNotesPanel(false);
                              }}
                              title={"Attachments"}/>
                    </SettingsFieldWrapper>
                    <SettingsFieldWrapper className={marginInline} title={`Notes`}>
                        <IconButton className={classNames({
                            [iconSettings]: true
                        })} icon={'Boards'}
                                    onClick={() => {
                                        setShowNotesPanel(!showNotesPanel);
                                        setShowAttachmentsPanel(false);
                                    }}
                                    title={"Notes"}/>
                    </SettingsFieldWrapper>
                    <div className={marginInline}>
                        <UsersList label={`Assignees`}
                                   employees={employees}
                                   maxEmployeesDisplayable={2}/>
                    </div>
                    <Switcher className={marginInline}/>
                </div>
            </Wrapper>
        </div>
    )
}

export default ProjectHeader;