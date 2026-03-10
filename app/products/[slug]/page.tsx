import { productsDummyData } from "@/constans/productsDummy";
import Image from "next/image";
import ProductDetail from "@/components/layouts/ProductDetail";

const ProductDetailPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const product = productsDummyData.find((product) => product._id === slug);

  return (
    <div className="px-container pt-14 w-full border border-gray-200">
      <ProductDetail slug={slug} />
    </div>
  );
};

export default ProductDetailPage;
