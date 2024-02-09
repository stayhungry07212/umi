import type { Serializer } from '@stay.hungry07212/umi-serializers-core';
import { baseX } from './baseX';

/**
 * A string serializer that uses base10 encoding.
 * @category Serializers
 */
export const base10: Serializer<string> = baseX('0123456789');
