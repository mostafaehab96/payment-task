import { XmlComposingStrategyInterface } from '../interfaces/xml-composing-strategy.interface';
import { create } from 'xmlbuilder2';
import * as fs from 'node:fs';

export function generateXml(data, strategy: XmlComposingStrategyInterface) {
  try {
    const { obj, filename } = strategy.composeXml(data);
    const doc = create(obj);
    const xml = doc.end({ prettyPrint: true });
    if (!fs.existsSync('./generated-xmls')) {
      fs.mkdirSync('./generated-xmls/');
    }
    fs.writeFileSync(`./generated-xmls/${filename}`, xml);
  } catch (error) {
    throw new Error('Failed to compose XML: ' + error);
  }
}
