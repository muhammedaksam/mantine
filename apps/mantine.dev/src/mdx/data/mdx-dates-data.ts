import { Frontmatter } from '@/types';

export const MDX_DATES_DATA: Record<string, Frontmatter> = {
  GettingStartedDates: {
    title: 'Getting started',
    description: 'Get started with @mantine/dates package',
    package: '@mantine/dates',
    license: 'MIT',
    slug: '/dates/getting-started',
    docs: 'dates/getting-started.mdx',
    hideInSearch: true,
  },

  Calendar: {
    title: 'Calendar',
    package: '@mantine/dates',
    slug: '/dates/calendar',
    description: 'Base component for custom date pickers',
    props: ['Calendar'],
    styles: ['Calendar'],
    import: "import { Calendar } from '@mantine/dates';",
    source: '@mantine/dates/src/components/Calendar/Calendar.tsx',
    docs: 'dates/calendar.mdx',
  },

  DateInput: {
    title: 'DateInput',
    package: '@mantine/dates',
    slug: '/dates/date-input',
    description: 'Free form date input',
    props: ['DateInput'],
    styles: ['DateInput'],
    import: "import { DateInput } from '@mantine/dates';",
    source: '@mantine/dates/src/components/DateInput/DateInput.tsx',
    docs: 'dates/date-input.mdx',
  },

  DatePicker: {
    title: 'DatePicker',
    package: '@mantine/dates',
    slug: '/dates/date-picker',
    description: 'Inline date, multiple dates and dates range picker',
    props: ['DatePicker'],
    styles: ['DatePicker'],
    import: "import { DatePicker } from '@mantine/dates';",
    source: '@mantine/dates/src/components/DatePicker/DatePicker.tsx',
    docs: 'dates/date-picker.mdx',
  },

  DatePickerInput: {
    title: 'DatePickerInput',
    package: '@mantine/dates',
    slug: '/dates/date-picker-input',
    description: 'Date, multiple dates and dates range picker input',
    props: ['DatePickerInput'],
    styles: ['DatePickerInput'],
    import: "import { DatePickerInput } from '@mantine/dates';",
    source: '@mantine/dates/src/components/DatePickerInput/DatePickerInput.tsx',
    docs: 'dates/date-picker-input.mdx',
  },

  DatesProvider: {
    title: 'DatesProvider',
    package: '@mantine/dates',
    slug: '/dates/dates-provider',
    description: 'Settings provider for @mantine/dates components',
    import: "import { DatesProvider } from '@mantine/dates';",
    source: '@mantine/dates/src/components/DatesProvider/DatesProvider.tsx',
    docs: 'dates/dates-provider.mdx',
  },

  DateTimePicker: {
    title: 'DateTimePicker',
    package: '@mantine/dates',
    slug: '/dates/date-time-picker',
    props: ['DateTimePicker'],
    styles: ['DateTimePicker'],
    description: 'Capture datetime from the user',
    import: "import { DateTimePicker } from '@mantine/dates';",
    source: '@mantine/dates/src/components/DateTimePicker/DateTimePicker.tsx',
    docs: 'dates/date-time-picker.mdx',
  },

  MonthPicker: {
    title: 'MonthPicker',
    package: '@mantine/dates',
    slug: '/dates/month-picker',
    props: ['MonthPicker'],
    styles: ['MonthPicker'],
    description: 'Inline month, multiple months and months range picker',
    import: "import { MonthPicker } from '@mantine/dates';",
    source: '@mantine/dates/src/components/MonthPicker/MonthPicker.tsx',
    docs: 'dates/month-picker.mdx',
  },

  MonthPickerInput: {
    title: 'MonthPickerInput',
    package: '@mantine/dates',
    slug: '/dates/month-picker-input',
    props: ['MonthPickerInput'],
    styles: ['MonthPickerInput'],
    description: 'Month, multiple months and months range picker input',
    import: "import { MonthPickerInput } from '@mantine/dates';",
    source: '@mantine/dates/src/components/MonthPickerInput/MonthPickerInput.tsx',
    docs: 'dates/month-picker-input.mdx',
  },

  TimeInput: {
    title: 'TimeInput',
    package: '@mantine/dates',
    slug: '/dates/time-input',
    props: ['TimeInput'],
    styles: ['TimeInput'],
    description: 'Capture time from the user',
    import: "import { TimeInput } from '@mantine/dates';",
    source: '@mantine/dates/src/components/TimeInput/TimeInput.tsx',
    docs: 'dates/time-input.mdx',
  },

  YearPicker: {
    title: 'YearPicker',
    package: '@mantine/dates',
    slug: '/dates/year-picker',
    props: ['YearPicker'],
    styles: ['YearPicker'],
    description: 'Inline year, multiple years and years range picker',
    import: "import { YearPicker } from '@mantine/dates';",
    source: '@mantine/dates/src/components/YearPicker/YearPicker.tsx',
    docs: 'dates/year-picker.mdx',
  },

  YearPickerInput: {
    title: 'YearPickerInput',
    package: '@mantine/dates',
    slug: '/dates/year-picker-input',
    props: ['YearPickerInput'],
    styles: ['YearPickerInput'],
    description: 'Inline year, multiple years and years range picker',
    import: "import { YearPickerInput } from '@mantine/dates';",
    source: '@mantine/dates/src/components/YearPickerInput/YearPickerInput.tsx',
    docs: 'dates/year-picker-input.mdx',
  },

  TimePicker: {
    title: 'TimePicker',
    package: '@mantine/dates',
    slug: '/dates/time-picker',
    props: ['TimePicker'],
    styles: ['TimePicker'],
    description: 'Captures time value from the user',
    import: "import { TimePicker } from '@mantine/dates';",
    source: '@mantine/dates/src/components/TimePicker/TimePicker.tsx',
    docs: 'dates/time-picker.mdx',
  },
};
