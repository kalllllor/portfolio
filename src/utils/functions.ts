export const calculateWidth = (wrapperRef: React.RefObject<HTMLDivElement>, styles: { [key: string]: string }) => {
    if (!wrapperRef.current) return;

    const meWrapper = wrapperRef.current.querySelector(`.${styles['me-wrapper']}`) as HTMLDivElement;
    const firstSpan = wrapperRef.current.querySelector('span:first-of-type') as HTMLSpanElement;
    const secondSpan = wrapperRef.current.querySelector('span:last-of-type') as HTMLSpanElement;

    if (!meWrapper || !firstSpan || !secondSpan) return;

    const containerWidth = wrapperRef.current.offsetWidth;
    const totalWidth = document.documentElement.clientWidth;
    const leftBreakpointWidth = (totalWidth - containerWidth) / 2;

    const rightBreakpoint = leftBreakpointWidth + meWrapper.offsetWidth;
    const rightWidth = rightBreakpoint - leftBreakpointWidth;

    const spanHeight = parseFloat(window.getComputedStyle(firstSpan).height);

    firstSpan.style.width = `${leftBreakpointWidth}px`;
    firstSpan.style.left = `-${leftBreakpointWidth}px`;
    firstSpan.style.top = `-${spanHeight}px`;

    secondSpan.style.width = `${Math.ceil(totalWidth - rightBreakpoint)}px`;
    secondSpan.style.left = `${leftBreakpointWidth % 1 === 0 ? rightWidth : Math.floor(rightWidth)}px`;
    secondSpan.style.top = `-${spanHeight}px`;
};

export const calculateSocials = (wrapperRef: React.RefObject<HTMLDivElement>, styles: { [key: string]: string }, marginLeft: number) => {
    if (!wrapperRef.current) return;
    const containerWidth = wrapperRef.current.offsetWidth;
    const socialsWrapper = wrapperRef.current.querySelector(`.${styles['socials']}`) as HTMLDivElement;
    const meWrapper = wrapperRef.current.querySelector(`.${styles['me-wrapper']}`) as HTMLDivElement;

    if (!socialsWrapper || !meWrapper) return;

    socialsWrapper.style.left = `${meWrapper.offsetWidth + marginLeft}px`;
    socialsWrapper.style.width = `${containerWidth - meWrapper.offsetWidth - marginLeft * 2}px`;
};
