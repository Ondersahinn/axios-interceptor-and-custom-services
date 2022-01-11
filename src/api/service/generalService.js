import { getRequest } from '../client/client';
import finalConfig from '../../constans/config.json';
import headers from '../../constans/header.json';
import { parseResult } from './dataParser';

const servicesBaseUrl = 'https://jsonplaceholder.typicode.com/'

export const getPostDateService = async () => {
    const url = servicesBaseUrl+finalConfig.POSTDATA;
    const config = headers.content_type.application_json;
    const result = await getRequest(url, config);
    const parsedResult = parseResult(result);
    return parsedResult;
};
