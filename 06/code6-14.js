function object_compare(val1, val2) {
    if (val1.id > val2.id) return 1;
    else if (val1.id == val2.id) return 0;
    else if (val1.id < val2.id) return -1;
};