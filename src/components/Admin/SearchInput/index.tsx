import { InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ChangeEvent } from "react";

interface ISearchInputProps {
	value: string;
	onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const SearchInput: React.FC<ISearchInputProps> = ({ value, onChange }) => {
	return (
		<Paper
			sx={{
				py: 1,
				px: 2,
				display: "inline-flex",
				alignItems: "center",
			}}
		>
			<InputBase
				placeholder="جست و جوی ..."
				inputProps={{ "aria-label": "search input" }}
				value={value}
				onChange={onChange}
			/>
			<SearchIcon aria-label="search" />
		</Paper>
	);
};

export default SearchInput;
