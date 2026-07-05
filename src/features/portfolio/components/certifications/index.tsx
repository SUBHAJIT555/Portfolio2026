import { CERTIFICATIONS } from "../../data/certifications";
import { Panel, PanelHeader, PanelTitle, PanelTitleSup } from "../panel";
import { CertificationList } from "./certification-list";

export function Certifications() {
  return (
    <Panel id="certs">
      <PanelHeader>
        <PanelTitle>
          Certifications
          <PanelTitleSup>({CERTIFICATIONS.length})</PanelTitleSup>
        </PanelTitle>
      </PanelHeader>

      <CertificationList certifications={CERTIFICATIONS} />
    </Panel>
  );
}
