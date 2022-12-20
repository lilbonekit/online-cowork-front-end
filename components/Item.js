import { format } from "date-fns";

const Item = ({ item }) => {
  return (
    <div>
      {item?.fields?.task && (
        <li className="flex items-center text-center  shadow-lg rounded-lg my-6 py-4 px-4 mx-auto w-10/12 font-light box-shadow-n">
          <p className={`flex-1 text-coworkdarkbeige `}>
            On {format(new Date(item.fields.time), "PPPP")}:
            <br />
            <br />
            <strong className="font-bold text-md text-gray-200">
              {item.fields.task}
            </strong>
          </p>
        </li>
      )}
    </div>
  );
};

export default Item;
