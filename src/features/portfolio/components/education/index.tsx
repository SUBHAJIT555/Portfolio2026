import { EDUCATION } from "../../data/education";
import { ExperiencePositionItem } from "../experiences/experience-position-item";
import { Panel, PanelHeader, PanelTitle } from "../panel";

export function Education() {
  return (
    <Panel id="education">
      <PanelHeader>
        <PanelTitle>Education</PanelTitle>
      </PanelHeader>

      <div className="pr-2 pl-4">
        <div className="screen-line-after py-4">
          <div className="relative space-y-4 before:absolute before:top-3 before:left-3 before:h-[calc(100%-0.75rem)] before:w-px before:bg-border">
            {EDUCATION.map((position, index) => (
              <ExperiencePositionItem
                key={position.id}
                position={position}
                isLastInTimeline={index === EDUCATION.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </Panel>
  );
}
