import * as React from "react";
import { Form as FinalForm } from "react-final-form";
import { Mutation as ApolloMutation } from "react-apollo";
import { FORM_ERROR } from "final-form";
import arrayMutators from "final-form-arrays";
import captureError from "~/utils/captureError";
import { environment } from "~/config";

const MUTATORS = { ...arrayMutators };

interface IProps {
  className?: string;
  style?: React.CSSProperties;
  children: any;
  mutation: any;
  setFormObj?: setFormObj;
  mutationInput?: object | ((values: object) => object);
  initialValues?: object;
  updateCache?: any;
  onSubmit?: (node: any, values?: any) => void;
  "data-track": string | null;
  id?: string;
  setForm?: any;
}

export default function Mutation({
  children,
  className,
  "data-track": dataTrack,
  style,
  mutation,
  mutationInput,
  updateCache,
  initialValues,
  onSubmit,
  id,
  setFormObj,
}: IProps) {
  const formRef = React.useRef<HTMLFormElement>(null);

  return (
    <ApolloMutation mutation={mutation} update={updateCache}>
      {(mutate: any) => {
        const submit = async (values: any, ..._rest: any) => {
          try {
            const { data } = await mutate({
              variables: {
                input: {
                  ...buildInput(values, mutationInput),
                },
              },
            });

            const response = data && data[Object.keys(data)[0]];

            if (response.errors && response.errors.length > 0) {
              const normalized = response.errors.reduce(normalizeErrors, {});
              console.log(normalized);
              return normalized;
            }

            if (onSubmit) {
              onSubmit(response.node, values);
            }
          } catch (e) {
            if (environment.isProduction) {
              captureError(e);
            } else {
              console.error(e); // tslint:disable-line
            }
            return {
              [FORM_ERROR]: "Server error",
            };
          }
        };

        return (
          <FinalForm
            onSubmit={submit}
            initialValues={initialValues || {}}
            mutators={MUTATORS}
          >
            {({ handleSubmit, values, form }: any) => {
              setFormObj && setFormObj(form);

              return (
                <form
                  id={id}
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className={className}
                  style={style}
                  autoComplete="off"
                >
                  {children}
                </form>
              );
            }}
          </FinalForm>
        );
      }}
    </ApolloMutation>
  );
}

interface IError {
  field: string;
  message: string;
}

function buildInput(
  input: object,
  mutationInput: undefined | null | object | ((data: object) => object)
) {
  if (typeof mutationInput === "function") {
    return mutationInput(input);
  }

  if (mutationInput) {
    return { ...mutationInput, ...input };
  }

  return input;
}

function normalizeErrors(acc: any, error: IError) {
  acc[error.field === "base" ? FORM_ERROR : error.field] = error.message;
  return acc;
}
