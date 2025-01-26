import {createTheme} from "@mantine/core";

export function ThemeConfig(fontFamily: string) {
    return createTheme({
        fontFamily: fontFamily,
        primaryColor: 'green',
        primaryShade: 9,
        colors: {
            'green': [
                "#d3e0cc",
                "#e2fdd4",
                "#bcd1b3",
                "#a6c19a",
                "#90b281",
                "#7aa367",
                "#64934e",
                "#4d8435",
                "#37741b",
                "#216502"
            ],
            'green-light': [
                '#f4f7f2',
                '#e7ece5',
                '#cbd8c7',
                '#adc3a5',
                '#93b189',
                '#83a677',
                '#7aa26c',
                '#678d5b',
                '#5b7d50',
                '#4c6c41'
            ],
            'mango': [
                '#fff6e1',
                '#ffeccc',
                '#ffd79b',
                '#fec165',
                '#feaf38',
                '#fea31c',
                '#fe9d0a',
                '#e28900',
                '#ca7800',
                '#b06700'
            ],
            'placeholder': [
                '#f5f5f5',
                '#e7e7e7',
                '#cdcdcd',
                '#b2b2b2',
                '#9a9a9a',
                '#8b8b8b',
                '#848484',
                '#717171',
                '#656565',
                '#575757'
            ]
        },
        shadows: {
            lg: '0 0 4px 2px rgba(0, 0, 0, 0.1)',
            xl: '0 0 8px 2px rgba(0, 0, 0, 0.1)'
        },
        components: {
            Button: {defaultProps: {size: 'md'}},
            PasswordInput: {defaultProps: {size: 'md'}},
            NumberInput: {defaultProps: {size: 'md'}},
            TextInput: {defaultProps: {size: 'md'}},
            ColorInput: {defaultProps: {size: 'md'}},
            DatePickerInput: {defaultProps: {size: 'md'}},
            DateTimePicker: {defaultProps: {size: 'md'}},
            PinInput: {defaultProps: {size: 'md'}},
            Textarea: {defaultProps: {size: 'md'}},
            MultiSelect: {defaultProps: {size: 'md'}},
            Select: {defaultProps: {size: 'md'}},
            SegmentedControl: {defaultProps: {size: 'md'}},
            RadioGroup: {defaultProps: {size: 'md'}},
            Switch: {defaultProps: {size: 'md'}}
        }
    })
}