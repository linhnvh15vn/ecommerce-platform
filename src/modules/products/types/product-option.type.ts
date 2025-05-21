export type OptionValue = {
  id: string;
  option_id: string;
  value: string | number;
  created_at: Date;
  updated_at: Date;
};

export type ProductOption = {
  id: string;
  title: string;
  option_values: OptionValue[];
  created_at: Date;
  updated_at: Date;
};
