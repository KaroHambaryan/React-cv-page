import React, { useCallback } from "react";

const Option = ({ data, defaultValue, unikalKay }) => {

	const onRender = useCallback((data, defaultValue) => {
		return data && data.name.sort().map((element) => {
			if (element !== defaultValue) {
				return <option
					key={element + unikalKay}
					value={element}
				>
					{data.resData[element].code + "___" + data.resData[element].name}
				</option>;
			}

		});

	}, []);

	return (
		<>
			{
				onRender(data, defaultValue)
			}
		</>
	);
}

export default Option;
