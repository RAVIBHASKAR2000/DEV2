import { text } from "@keystone-next/fields";
import cuid from "cuid";

export const slug = ({
    from,
    name = 'slug',
    isIndexed = 'unique',
  }: {
    from: string;
    name?: string;
    isIndexed?: boolean | 'unique' | undefined;
  }) => {
    if (!name || !from) throw new Error('name and from is required');
    return text({
      defaultValue: ({ originalInput }: any) => {
        const slugValue = originalInput[name];
        if (slugValue) return slugValue;
        const input = originalInput[from] || 'new-item';
        const result =
          input
            .trim()
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^\w\-]+/g, '')
            .replace(/\-\-+/g, '-')
            .replace(/^-+/, '')
            .replace(/-+$/, '') ?? '';
        return `${result}-${cuid.slug()}`;
      },
      ui: { createView: { fieldMode: 'hidden' } },
      isIndexed: true,
    });
  };
  