import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    mainLogo: React.CSSProperties;
    secondLogo: React.CSSProperties;
    menuItem: React.CSSProperties;
    menuItemActive: React.CSSProperties;
    devTitle: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    mainLogo?: React.CSSProperties;
    secondLogo?: React.CSSProperties;
    menuItem?: React.CSSProperties;
    menuItemActive?: React.CSSProperties;
    devTitle?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    mainLogo: true;
    secondLogo: true;
    menuItem: true;
    menuItemActive: true;
    devTitle: true;
  }
}
