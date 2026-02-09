export interface XmlComposingStrategyInterface {
  composeXml(data: object): { obj: object; filename: string };
}
