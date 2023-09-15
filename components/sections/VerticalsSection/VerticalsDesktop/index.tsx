import React from 'react';

import { VERTICALS } from '../../../../constants/veticals';
import VerticalsCard from './VerticalsCard';
import VerticalsCardDescription from './VerticalsCardDescription';

import { type Props } from './types';

const VerticalsDesktop: React.FC<Props> = ({
  options,
  verticals,
  isAnimate,
  hasComponent,
  isOpen,
  setActiveCardIdx,
  setDescriptionId,
  setScrollPos,
  setIsOpen,
  activeCardIdx,
  descriptionId,
  scrollPos,
}) => {
  return (
    <>
      <VerticalsCard
        options={options}
        verticals={verticals?.cards?.[options?.id]}
        setIsOpen={setIsOpen}
        setActiveCardIdx={setActiveCardIdx}
        setDescriptionId={setDescriptionId}
        setScrollPos={setScrollPos}
        isActive={activeCardIdx === options?.id}
        isOpen={isOpen}
        isAnimate={isAnimate}
      />

      {hasComponent && (
        <VerticalsCardDescription
          id={activeCardIdx}
          scrollPos={scrollPos}
          subcategoriesHeading={verticals?.subcategoriesHeading}
          icon={VERTICALS[activeCardIdx]?.xLargeIcon}
          verticals={verticals?.cards?.[activeCardIdx]}
          isVisibleDescription={
            descriptionId === options?.verticalsDescriptionComponentId && isOpen
          }
          setIsOpen={setIsOpen}
        />
      )}
    </>
  );
};

export default VerticalsDesktop;
