import { IEvent } from "~/components/InboxMenu/Tabs/Content/types/Events";
import { IHistory } from "~/components/InboxMenu/Tabs/Content/types/History";

export interface Response {
  isOpen: boolean;
  data: {
    event: IEvent;
    profile: {
      name: string;
      email: string;
    };
    history: IHistory[];
  };
}
