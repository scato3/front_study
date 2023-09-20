import { IQuery } from "../../../../commons/types/generated/types";

export interface BoardDeatilUIProps {
  data?: Pick<IQuery, "fetchBoard">;
  onClickMoveToBoardEdit: () => void;
}
