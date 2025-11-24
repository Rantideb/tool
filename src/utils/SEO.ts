import { tools } from "@/config";

export const getKeywords = (toolId: string): string => {
  const tool = tools.find((t) => t.id === toolId);
  return tool ? tool.seo.keywords : "";
};

export const getTitle = (toolId: string): string => {
  const tool = tools.find((t) => t.id === toolId);
  return tool ? `${tool.seo.title} | Open Tool Kit` : "Open Tool Kit";
};

export const getDescription = (toolId: string): string => {
  const tool = tools.find((t) => t.id === toolId);
  return tool
    ? tool.seo.description
    : "Open Tool Kit - Your go-to source for open-source tools.";
};

export const getHref = (toolId: string): string => {
  const tool = tools.find((t) => t.id === toolId);
  return tool ? tool.href : "/";
};
