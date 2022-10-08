
import { useEffect } from "react";


const Option = ({data ,defaultValue}) => {
	useEffect(() => {
		console.log(data);
	},[])
	return (
		<>
			{
				data && data.name.sort().map((element) => {
					if(element !== defaultValue){
					return <option
						key={element}
						value={element}
						>{data.resData[element].code + "___" + data.resData[element].name}</option>
					}
				})
			}
		</>
	);
}

export default Option;
