export const getLastKeyFromPathname = (pathname: string) => {
    return pathname.split('/')[pathname.split('/').length - 1]
}
