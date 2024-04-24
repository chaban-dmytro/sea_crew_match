import sprite from "../../../images/sptite.svg";
import { Items, Item, Wrap, Icon, Text } from "./ProgressBar.styled";

export const ProgressBar = ({ currentStep }) => {
  const items = [];
  const totalSteps = 6;
  const iconsArray = [
    "icon-u_square-full",
    "icon-u_fishing-hook",
    "icon-u_calender-1",
    "icon-u_credit-card",
    "icon-u_file-edit-alt",
    "icon-u_check-circle",
  ];

  const classNameGenerator = (index) => {
    if (index === currentStep) {
      return "active";
    } else if (index < currentStep) {
      return "done";
    } else {
      return;
    }
  };

  for (let index = 1; index <= totalSteps; index++) {
    items.push(
      <Item key={index} className={classNameGenerator(index)}>
        <Wrap>
          <Icon>
            <svg>
              <use href={sprite + `#${iconsArray[index - 1]}`}></use>
            </svg>
          </Icon>
          {classNameGenerator(index) === "active" && (
            <Text>
              <p>
                Step {index}/{totalSteps}
              </p>
              <p>Basic Information</p>
            </Text>
          )}
        </Wrap>
      </Item>
    );
  }

  return <Items>{items}</Items>;
};
