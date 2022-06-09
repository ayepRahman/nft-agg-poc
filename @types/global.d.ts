interface NextDataProps extends NEXT_DATA {
  apolloState: any;
}

declare global {
  interface Window {
    __NEXT_DATA__: NextDataProps;
  }
}
