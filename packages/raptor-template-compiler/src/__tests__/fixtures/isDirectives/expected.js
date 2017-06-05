import _nsRow from "ns-row";
export default function tmpl($api, $cmp, $slotset, $ctx) {
    return [$api.h(
        "table",
        {},
        [$api.h(
            "tbody",
            {},
            $api.i($cmp.rows, function (row, index) {
                return row.visible ? $api.c(
                    "tr",
                    _nsRow,
                    {
                        attrs: {
                            is: "ns-row"
                        }
                    }
                ) : null;
            })
        )]
    )];
}