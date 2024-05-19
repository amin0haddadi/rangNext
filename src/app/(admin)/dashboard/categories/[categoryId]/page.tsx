"use client";
import Category from "@/components/Admin/Categories/Category";
import React from "react";

interface ICategoryPageProps {
	searchParams?: {
		page?: string;
	};
	params: {
		categoryId: string;
	};
}

const CategoryPage: React.FC<ICategoryPageProps> = ({
	params,
	searchParams,
}) => {
	const page = Number(searchParams?.page) || 1;
	return <Category id={params.categoryId} page={page} />;
};

export default CategoryPage;
