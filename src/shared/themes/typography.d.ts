import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    mainLogo: React.CSSProperties;
    secondLogo: React.CSSProperties;
    menuItem: React.CSSProperties;
    menuItemActive: React.CSSProperties;
    devTitle: React.CSSProperties;
    sectionTitle: React.CSSProperties;
    bodyText: React.CSSProperties;
    projectType: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    mainLogo?: React.CSSProperties;
    secondLogo?: React.CSSProperties;
    menuItem?: React.CSSProperties;
    menuItemActive?: React.CSSProperties;
    devTitle?: React.CSSProperties;
    sectionTitle?: React.CSSProperties;
    bodyText?: React.CSSProperties;
    projectType?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    mainLogo: true;
    secondLogo: true;
    menuItem: true;
    menuItemActive: true;
    devTitle: true;
    sectionTitle: true;
    bodyText: true;
    projectType: true;
  }
}
