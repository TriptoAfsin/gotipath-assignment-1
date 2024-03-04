import { checkPassString } from "@/utils/stringUtils";
import { GoCheckCircleFill } from "react-icons/go";

type PasswordCheckProps = {
  password: string;
  minChars?: number;
};
function PasswordCheck({ password, minChars = 8 }: PasswordCheckProps) {
  const { hasUpperCase, hasLowerCase, hasSymbol, isAtleastMinChars } =
    checkPassString(password, minChars);
  return (
    <div className="grid grid-cols-2 gap-2 text-sm font-medium text-gray-500">
      <span className="flex items-center">
        <span className="w-5 h-5 rounded-full mr-1.5 grid place-content-center bg-bg-fill-hover">
          <GoCheckCircleFill size={20} color={!hasUpperCase ? "" : "#269943"} />
        </span>
        <p>Upper case letter</p>
      </span>
      <span className="flex items-center">
        <span className="w-5 h-5 rounded-full mr-1.5 grid place-content-center bg-bg-fill-hover">
          <GoCheckCircleFill size={20} color={!hasSymbol ? "" : "#269943"} />
        </span>
        <p>Add a symbol (#$^&)</p>
      </span>
      <span className="flex items-center">
        <span className="w-5 h-5 rounded-full mr-1.5 grid place-content-center bg-bg-fill-hover">
          <GoCheckCircleFill size={20} color={!hasLowerCase ? "" : "#269943"} />
        </span>
        <p>Lower case letter</p>
      </span>
      <span className="flex items-center">
        <span className="w-5 h-5 rounded-full mr-1.5 grid place-content-center bg-bg-fill-hover">
          <GoCheckCircleFill
            size={20}
            color={!isAtleastMinChars ? "" : "#269943"}
          />
        </span>
        <p>Minimum {minChars} character</p>
      </span>
    </div>
  );
}

export default PasswordCheck;
