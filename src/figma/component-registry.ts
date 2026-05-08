import { EnterpriseButton } from "../components/EnterpriseButton";

/**
 * Map Figma component names to real React components.
 * Example:
 * "Primary Button": EnterpriseButton
 */
export const componentRegistry: Record<string, React.ComponentType<any>> = {
  "Primary Button": EnterpriseButton,
  "Button": EnterpriseButton
};
