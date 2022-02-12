import React, {RefObject, useState} from "react";
import classNames from "classnames";
import {Icon, PersonaSize, ProgressIndicator, useTheme} from "@fluentui/react";
import {getProjectHeaderClassNames} from "./projectHeader.style";
import Title from "../Title/title.component";
import UsersList from "../UsersList/usersList.component";
import Wrapper from "../layout/Wrapper/wrapper.component";
import {ProjectType} from "../../types/Project/project.type";
import Switcher from "../Boards/Switcher/switcher.component";
import SettingsFieldWrapper from "../SettingsField/settingsFieldWrapper.component";
import IconButton from "../IconButton/iconButton.component";
import InformationBox from "../InformationBox/informationBox.component";
import {DirectionalHint} from "@fluentui/react/lib/Callout";
import {calculatePercentageOfProgress} from "../../utils/calculation";
import {formatDate} from "../../utils/dateFormatter";
import {useNavigate} from "react-router-dom";

interface Props extends ProjectType {
    headerContainerRef: RefObject<HTMLDivElement>;
    headerHeight?: number;

    handleCollapsedHeader(value: boolean): void;
}

const ProjectHeader = (props: Props) => {
    const navigate = useNavigate();
    const [collapseHeader, setCollapseHeader] = useState<boolean>(false);
    const {
        headerContainerRef,
        name,
        employees,
        description,
        created_by,
        created_at,
        finish_date,
        headerHeight
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
            <InformationBox title={name} className={iconSettings} directionalHint={DirectionalHint.topAutoEdge}>
                <Title className={informationColor} text={description}/>
                <div>
                    <SettingsFieldWrapper className={informationColor} title={`Due date`}>
                        <Title size={'sm'} text={formatDate(finish_date)}/>
                    </SettingsFieldWrapper>
                    <SettingsFieldWrapper className={informationColor} title={`Created at`}>
                        <Title size={'sm'} text={formatDate(created_at)}/>
                    </SettingsFieldWrapper>
                    <SettingsFieldWrapper className={informationColor} title={`Created by`}>
                        <Title size={'sm'} text={created_by}/>
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
                <div className={marginInline}>
                    <IconButton onClick={() => navigate(-1)}
                                title={"Navigate back to the Go back to the list of projects!"}
                                className={classNames({
                                    [iconSettings]: true,
                                    [rotateCollapseIcon]: collapseHeader
                                })} icon={'NavigateBack'}/>
                </div>
                <div className={boardSettings}>
                    <SettingsFieldWrapper className={marginInline} title={`Files`}>
                        <Icon className={classNames({
                            [iconSettings]: true
                        })} iconName={'Library'}
                              title={"Attachments"}/>
                    </SettingsFieldWrapper>
                    <SettingsFieldWrapper className={marginInline} title={`Notes`}>
                        <IconButton className={classNames({
                            [iconSettings]: true
                        })} icon={'Boards'}
                                    title={"Notes"}/>
                    </SettingsFieldWrapper>
                    <div className={marginInline}>
                        <UsersList label={`Assignees`}
                                   employees={employees}
                                   circleSize={PersonaSize.size8}
                                   maxEmployeesDisplayable={2}/>
                    </div>
                    <Switcher className={marginInline}/>
                </div>
            </Wrapper>
        </div>
    )
}

export default ProjectHeader;