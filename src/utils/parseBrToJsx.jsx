import React from 'react';

export const parseBrToJsx = (string) => {
	if (!string) return null;

	return string.split(/<br\s*\/?>/i).map((line, index) => 
		(<React.Fragment key={index}>
			{line}
			{index < string.split(/<br\s*\/?>/i).length - 1 && <br />}
		</React.Fragment>)
	)
}