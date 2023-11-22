import { type Ref, computed } from 'vue';
import {formatFileSize} from "formatkit";

export function useFileSizeFormat(size: Ref<number> | number | undefined): Ref<string> | string {
    if (size === undefined) {
        return '-';
    } else if (typeof size === 'number') {
        return formatFileSize(size);
    } else {
        return computed(() => {
            return formatFileSize(size.value)
        });
    }
}
