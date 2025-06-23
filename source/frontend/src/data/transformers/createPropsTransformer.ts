import { type ComponentType, type ForwardRefExoticComponent, type FunctionComponent } from 'react';
import { type PageTransformerContext } from '../../app/[[...slug]]/page.transformers';
import { type EntryIdentifier } from '../../types/EntryIdentifier';

export type ComponentPropsTransformContext = PageTransformerContext;

type ComponentPropsTransform<Type extends string, Props> = (
  identifier: EntryIdentifier<Type>,
  context: ComponentPropsTransformContext,
) => Promise<Props>;

export type ComponentPropsTransformer<Type extends string, Props> = {
  component: FunctionComponent<Props> | ForwardRefExoticComponent<Props> | ComponentType<Props>;
  transform: ComponentPropsTransform<Type, Props>;
};

export function createPropsTransformer<Type extends string, Props>(
  component: FunctionComponent<Props> | ForwardRefExoticComponent<Props> | ComponentType<Props>,
  transform: ComponentPropsTransform<Type, Props>,
): ComponentPropsTransformer<Type, Props> {
  return {
    component,
    transform,
  };
}
