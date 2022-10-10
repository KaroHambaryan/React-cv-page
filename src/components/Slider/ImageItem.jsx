
const ImageItem = ({ data, index }) => {
	return (
		<>
			{
				data ?
					<img
						src={`${data.path}${data.items[index].name}${data.extansion}`}
						alt={`${data.items[index].name}`} /> :
					null
			}
		</>
	);
}
export default ImageItem;