export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: undefined;
      new: undefined;
      feedback: {
        type: 'IN_DIET' | 'OUT_OF_DIET' | undefined;
      }
      meal: {
        id: string;
      }
      edit: undefined;
    }
  }
}