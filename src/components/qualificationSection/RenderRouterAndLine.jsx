import React from "react";

const RenderRouterAndLine = ({ qualification }) => {
	return (
	<>
		<div>
			<div className={qualification.rounder}></div>
			<div className={qualification.line}></div>
		</div>
	</>
	);
};

export default RenderRouterAndLine;