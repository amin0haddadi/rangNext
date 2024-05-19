"use client";
import { Pagination as MPagination, Stack } from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface IPaginationProps {
	totalPages: number;
}

const Pagination: React.FC<IPaginationProps> = ({ totalPages }) => {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		const page = searchParams.get("page");
		setCurrentPage(page ? parseInt(page) : 1);
	}, [searchParams]);

	const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
		const params = new URLSearchParams(searchParams);
		if (value) {
			params.set("page", value.toString());
		}
		replace(`${pathname}?${params.toString()}`);
	};

	return (
		<Stack direction={"column"} alignItems={"center"} my={3}>
			<MPagination
				count={totalPages}
				page={currentPage}
				shape="rounded"
				onChange={handleChange}
			/>
		</Stack>
	);
};

export default Pagination;
