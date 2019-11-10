import React, { useEffect } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import clsx from 'clsx';
//styles
import classes from './Containers.module.scss';
import './Containers.style.scss';

/**
 * FlexContainer
 * - flex: 1
 */
export const FlexContainer = ({ children, ...rest }): JSX.Element => {
  return (
    <div className={classes.FlexContainer} {...rest}>
      {children}
    </div>
  );
};
FlexContainer.propTypes = { children: PropTypes.any.isRequired };
/**
 * HorizontalContainer
 * - flex: 1
 * - flexDirection: row
 */
export const HorizontalContainer = ({ children, className, ...rest }: { children: React.ReactNode; className?: string; rest?: any[] }): JSX.Element => {
  return (
    <div
      className={clsx(classes.HorizontalContainer, `horizontal-container ${className || ''}`)} {...rest}>
      {children}
    </div>
  );
};
HorizontalContainer.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string
};

/**
 * ViewHorizontalContainer
 * - height: 100vh
 * - flexDirection: row
 */
export const ViewHorizontalContainer = ({ children, ...rest }): JSX.Element => {
  return (
    <div className={classes.ViewHorizontalContainer}  {...rest}>
      {children}
    </div>
  );
};
ViewHorizontalContainer.propTypes = { children: PropTypes.any.isRequired };

/**
 * VerticalContainer
 * - flex: 1
 * - flexDirection: column
 */
export const VerticalContainer = ({ children, ...rest }): JSX.Element => {
  return (
    <div className={classes.VerticalContainer}  {...rest}>
      {children}
    </div>
  );
};
VerticalContainer.propTypes = { children: PropTypes.any.isRequired };

/**
 * ViewVerticalContainer
 * - height: 100vh
 * - flexDirection: column
 */
export const ViewVerticalContainer = ({ children, ...rest }): JSX.Element => {
  return (
    <div className={classes.ViewVerticalContainer}  {...rest}>
      {children}
    </div>
  );
};
ViewVerticalContainer.propTypes = { children: PropTypes.any.isRequired };

/**
 * CenteredContainer
 * - Centers content inside a flex container
 * - flex: 1
 */
export const CenteredContainer = ({ children, ...rest }): JSX.Element => {
  return (
    <div
      className={classes.CenteredContainer}
      {...rest}
    >
      {children}
    </div>
  );
};
CenteredContainer.propTypes = { children: PropTypes.any.isRequired };

/**
 * ViewCenteredContainer
 * - Centers content in the entire view
 * - height: 100vh
 */
export const ViewCenteredContainer = ({ children, ...rest }): JSX.Element => {
  return (
    <div
      className={classes.ViewCenteredContainer}
      {...rest}
    >
      {children}
    </div>
  );
};
ViewCenteredContainer.propTypes = { children: PropTypes.any.isRequired };

/**
 * ScrollingContainer
 * - overflow: 'auto'
 */
export const ScrollingContainer = ({
  className: classNameProp,
  children,
  ...rest
}: { className?: string; children: JSX.Element | string; rest?: any[] }): JSX.Element => {
  const className = classNames(classes.scroll, classNameProp);
  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
};

ScrollingContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

const LeftArrow = ({ darkMode }): JSX.Element => {
  return (
    <Arrow 
      icon="icon-chevron-left"
      darkMode={darkMode} />
  );
};

LeftArrow.propTypes = {
  darkMode: PropTypes.bool
};

const RightArrow = ({ darkMode }): JSX.Element => {
  return (
    <Arrow 
      icon="icon-chevron-right"
      darkMode={darkMode} />
  );
};

RightArrow.propTypes = {
  darkMode: PropTypes.bool
};

const Arrow = ({
  icon,
  darkMode
}): JSX.Element => {
  return (<i className={`${icon} icon-x-lg ${darkMode?'white':'dark-grey'}`} />);
};

Arrow.propTypes = {
  icon: PropTypes.string.isRequired,
  darkMode: PropTypes.bool
};

/**
 * SlidingContainer
 * - overflow: 'auto'
 */

type SlidingContainerStyle = {
  darkMode?: boolean;
  hideArrowBackground?: boolean;
  hideArrowIcons?: boolean;
  fillFromRight?: boolean;
};

type SlidingContainerProps = {
  className?: string;
  children: any;
  uniqueId: string;
  style?: SlidingContainerStyle;
  rest?: any;
};

export const SlidingContainer = ({
  className: classNameProp = '',
  children,
  uniqueId,
  style,
  ...rest
}: SlidingContainerProps): JSX.Element => {
  const className = classNames(classNameProp);

  const instanceId = uniqueId;
  const scrollContainerId = `itemsContainer${instanceId}`;
  const containerLeftArrowId = `itemsLeftArrow${instanceId}`;
  const containerRightArrowId = `itemsRightArrow${instanceId}`;
  const scrollContentId = `itemsContent${instanceId}`;

  const setOpacityOnArrows = (): void => {
    const leftArrow: HTMLElement = document.querySelector(`#${containerLeftArrowId}`);
    const rightArrow: HTMLElement = document.querySelector(`#${containerRightArrowId}`);
    const itemsContainer: HTMLElement = document.querySelector(`#${scrollContainerId}`);
    const containerContent: HTMLElement = document.querySelector(`#${scrollContentId}`);
    const scrollLeft = itemsContainer.scrollLeft;

    const hide = 'none';
    const show = 'flex';
    if (scrollLeft === 0) {
      if (containerContent.clientWidth <= itemsContainer.clientWidth) {
        leftArrow.style.display = hide;
        rightArrow.style.display = hide;

      } else {
        leftArrow.style.display = hide;
        rightArrow.style.display = show;
      }
    }

    if (scrollLeft !== 0) {
      if (containerContent.clientWidth - scrollLeft <= itemsContainer.clientWidth) {
        leftArrow.style.display = show;
        rightArrow.style.display = hide;
      } else {
        leftArrow.style.display = show;
        rightArrow.style.display = show;
      }
    }

    if (containerContent.clientWidth === itemsContainer.clientWidth) {
      leftArrow.style.display = hide;
      rightArrow.style.display = hide;
    }
  };

  const scrollTo = (element, to, duration, callback): void => {
    const start = element.scrollLeft,
      change = to,
      increment = 20;

    let currentTime = 0;

    const animateScroll = (): void => {
      currentTime += increment;
      // @ts-ignore
      element.scrollLeft = Math.easeInOutQuad(currentTime, start, change, duration);
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      } else {
        if (callback) {
          callback();
        }
      }
    };
    animateScroll();
  };

  const scrollRightHandler = (): void => {
    const itemsContainer = document.querySelector(`#${scrollContainerId}`);
    const duration = 650;
    scrollTo(itemsContainer, itemsContainer.clientWidth, duration, setOpacityOnArrows);
  };

  const scrollLeftHandler = (): void => {
    const itemsContainer = document.querySelector(`#${scrollContainerId}`);
    const duration = 650;
    scrollTo(itemsContainer, -itemsContainer.clientWidth, duration, setOpacityOnArrows);
  };

  // @ts-ignore
  Math.easeInOutQuad = (t, b, c, d): number => {
    //t = current time
    //b = start value
    //c = change in value
    //d = duration
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  };

  useEffect(() => {
    setOpacityOnArrows();
    window.addEventListener('resize', setOpacityOnArrows);

    const itemsContainer = document.querySelector(`#${scrollContainerId}`);
    itemsContainer.addEventListener('scroll', setOpacityOnArrows);

    return (): void => {
      window.removeEventListener('resize', setOpacityOnArrows);
      itemsContainer.removeEventListener('scroll', setOpacityOnArrows);
    };

  }, []);// Empty array ensures that effect is only run on mount and unmount

  const leftArrowClasses = clsx(
    classes.ArrowLeft, 
    style && style.hideArrowBackground && 'hide-arrow-background'
  );
  
  const rightArrowClasses = clsx(
    classes.ArrowRight, 
    style && style.hideArrowBackground && 'hide-arrow-background'
  );

  const slidingContainerClasses = clsx(
    classes.slidingContainer, 
    style && style.fillFromRight && 'fill-from-right'
  );

  return (
    <div className={className} {...rest}>
      <div className={classes.scrollingRoot}>
        <div 
          className={leftArrowClasses}
          id={containerLeftArrowId}
          aria-label="scroll content left"
          data-testid={'scroll-left-icon-button'}
          onClick={scrollLeftHandler}>
          { 
            (style && style.hideArrowIcons)
              ? null
              : <LeftArrow
                  darkMode={style && style.darkMode} />
          }
        </div>
        <div 
          id={scrollContainerId} data-testid={'scroll-container'}
          className={slidingContainerClasses}>
          <div id={scrollContentId} data-testid={'scroll-content'}
            className={clsx(classes.slidingContent, 'noScrollbar')}>
            {children}
          </div>
        </div>
        <div 
          className={rightArrowClasses}
          id={containerRightArrowId}
          aria-label="scroll content right"
          data-testid={'scroll-right-icon-button'}
          onClick={scrollRightHandler}>
          { 
            (style && style.hideArrowIcons)
              ? null
              : <RightArrow
                  darkMode={style && style.darkMode} />
          }
        </div>
      </div>
    </div>
  );
};

SlidingContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  uniqueId: PropTypes.string,
  style: PropTypes.object
};

/**
 * NarrowContainer
 * 320px wide centered container. Useful for mobile-friendly content
 */
export const NarrowContainer = ({ children, ...rest }): JSX.Element => {
  return (
    <div className={classes.NarrowContainer} {...rest}>
      {children}
    </div>
  );
};
NarrowContainer.propTypes = { children: PropTypes.any.isRequired };
