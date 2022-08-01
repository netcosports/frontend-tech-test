import { GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';

type Params<T> = ParsedUrlQuery & T;

export type ParamsWithCodename = Params<{ codename: string }>;
export type ParamsWithIdAndSlug = Params<{ id: string; slug: string }>;
export type ParamsWithId = Params<{ id: string }>;

export type GetStaticPropsContextWithCodename = GetStaticPropsContext<{ codename: string }>;
