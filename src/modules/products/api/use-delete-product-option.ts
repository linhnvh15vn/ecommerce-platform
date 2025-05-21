import { axios } from '@/api/axios.instance';
import { useMutation } from '@tanstack/react-query';

const deleteProductOption = async ({ productId, optionId }) => {
  const response = await axios.delete(
    `/products/${productId}/options/${optionId}`,
  );
  return response;
};

export const useDeleteProductOption = () => {
  return useMutation({
    mutationFn: deleteProductOption,
  });
};
