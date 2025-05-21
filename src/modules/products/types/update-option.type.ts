import type { CreateOption } from '@/modules/products/types/create-option.type';

export type UpdateOption = Partial<CreateOption> & {
  optionId?: string;
};
