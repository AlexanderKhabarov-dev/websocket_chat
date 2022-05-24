import { StringDecoder } from 'string_decoder'

export const decoder = (message) => {
    const stringDecoder = new StringDecoder('utf8');
    const buffer = new Buffer(message);

    return JSON.parse(stringDecoder.write(buffer))
}