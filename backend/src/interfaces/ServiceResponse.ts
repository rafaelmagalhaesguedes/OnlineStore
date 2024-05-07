//
export type ServiceMessage = { message: string };

type ServiceResponseErrorType = 'INVALID_DATA' | 'UNAUTHORIZED' | 'NOT_FOUND'
| 'CONFLICT' | 'INTERNAL_ERROR';

export type ServiceResponseError = {
  status: ServiceResponseErrorType,
  data: ServiceMessage | boolean
};

export type ServiceResponseSuccess<T> = {
  status: 'SUCCESSFUL' | 'CREATED' | 'UPDATED' | 'DELETED',
  data: T
};

export type ServiceResponse<T> = ServiceResponseError | ServiceResponseSuccess<T>;
