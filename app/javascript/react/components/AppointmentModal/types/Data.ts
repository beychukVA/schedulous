import { IProfile } from "~/components/InboxMenu/Tabs/Content/ProfileContent/Profile/types/Profile";
import { IHistory } from "~/components/InboxMenu/Tabs/Content/types/History";
import { IContact } from "../EventTemplate/CheckInTemplate/ContactCard/types/Contact";

export default interface IModalData {
  profile: IProfile;
  history: IHistory[];
  contacts: IContact[];
}
