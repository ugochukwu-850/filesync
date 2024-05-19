// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { Settings } from "./Settings";
import type { SystemInformation } from "./SystemInformation";
import type { TransferHistory } from "./TransferHistory";

export interface State {
  settings: Settings;
  transfer_history: Array<TransferHistory>;
  system_information: SystemInformation;
}