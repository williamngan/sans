import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';

import { Box } from '../components/Box';
import { Btn } from '../components/Btn';


storiesOf('Box', module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))

  .add('default, guide', () => <Box guide>Hello</Box>)
  .add('inline, guide', () => <Box guide inline>Hello</Box>)
  .add('inline, pad=20', () => <Box guide pad={20} inline>Hello</Box>)
  .add('width=300, height=100', () => <Box guide width={300} height={100}>Hello</Box>)
  .add('bg=#f1f3f7', () => <Box guide width={300} height={100} bg="#f1f3f7">Hello</Box>)

  .add('three items', () => <Box guide width={300} height={100}><Box guide>Hello</Box><Box guide>Flex</Box><Box guide>Box</Box></Box>)
  .add('justify=center', () => <Box guide width={300} height={100} justify="center"><Box guide>Hello</Box><Box guide>Flex</Box><Box guide>Box</Box></Box>)
  .add('justify=end', () => <Box guide width={300} height={100} justify="end"><Box guide>Hello</Box><Box guide>Flex</Box><Box guide>Box</Box></Box>)
  .add('justify=start align=end', () => <Box guide width={300} height={100} justify="start" align="end"><Box guide>Hello</Box><Box guide>Flex</Box><Box guide>Box</Box></Box>)
  .add('justify=end align=start', () => <Box guide width={300} height={100} justify="end" align="start"><Box guide>Hello</Box><Box guide>Flex</Box><Box guide>Box</Box></Box>)

  .add('reverse', () => <Box guide width={300} height={100} reverse><Box guide>Hello</Box><Box guide>Flex</Box><Box guide>Box</Box></Box>)
  .add('vertical', () => <Box guide width={300} height={100} vertical><Box guide>Hello</Box><Box guide>Flex</Box><Box guide>Box</Box></Box>)
  .add('vertical, justify=end', () => <Box guide width={300} height={100} vertical justify="end"><Box guide>Hello</Box><Box guide>Flex</Box><Box guide>Box</Box></Box>)
  .add('verticalreverse, justify=center', () => <Box guide width={300} height={100} verticalreverse justify="center"><Box guide>Hello</Box><Box guide>Flex</Box><Box guide>Box</Box></Box>)
  .add('vertical, align=start', () => <Box guide width={300} height={100} vertical align="start"><Box guide>Hello</Box><Box guide>Flex</Box><Box guide>Box</Box></Box>)

  .add('justify=around', () => <Box guide width={300} height={100} justify="around"><Box guide>Hello</Box><Box guide>Flex</Box><Box guide>Box</Box></Box>)
  .add('justify=evenly', () => <Box guide width={300} height={100} justify="evenly"><Box guide>Hello</Box><Box guide>Flex</Box><Box guide>Box</Box></Box>)
  .add('justify=between', () => <Box guide width={300} height={100} justify="between"><Box guide>Hello</Box><Box guide>Flex</Box><Box guide>Box</Box></Box>)

  .add('single line (default)', () => <Box guide width={300} height={100}><Box guide>Hello&nbsp;Avocado&nbsp;Banana!&nbsp;</Box><Box guide>Flex&nbsp;Bacon&nbsp;Butter!&nbsp;</Box><Box guide>Box&nbsp;Kale&nbsp;Tofu!</Box></Box>)
  .add('overflow=visible', () => <Box guide width={300} height={100} overflow="visible"><Box guide>Hello&nbsp;Avocado&nbsp;Banana!&nbsp;</Box><Box guide>Flex&nbsp;Bacon&nbsp;Butter!&nbsp;</Box><Box guide>Box&nbsp;Kale&nbsp;Tofu!</Box></Box>)
  .add('wrap', () => <Box guide width={300} height={100} wrap><Box guide>Hello&nbsp;Avocado&nbsp;Banana!&nbsp;</Box><Box guide>Flex&nbsp;Bacon&nbsp;Butter!&nbsp;</Box><Box guide>Box&nbsp;Kale&nbsp;Tofu!</Box></Box>)
  .add('wrap justify=center', () => <Box guide width={300} height={100} wrap justify="center"><Box guide>Hello&nbsp;Avocado&nbsp;Banana!&nbsp;</Box><Box guide>Flex&nbsp;Bacon&nbsp;Butter!&nbsp;</Box><Box guide>Box&nbsp;Kale&nbsp;Tofu!</Box></Box>)
  .add('wrap justify=end content=start', () => <Box guide width={300} height={100} wrap justify="end" content="start"><Box guide>Hello&nbsp;Avocado&nbsp;Banana!&nbsp;</Box><Box guide>Flex&nbsp;Bacon&nbsp;Butter!&nbsp;</Box><Box guide>Box&nbsp;Kale&nbsp;Tofu!</Box></Box>)
  .add('wrap justify=start content=around', () => <Box guide width={300} height={100} wrap justify="start" content="around"><Box guide>Hello&nbsp;Avocado&nbsp;Banana!&nbsp;</Box><Box guide>Flex&nbsp;Bacon&nbsp;Butter!&nbsp;</Box><Box guide>Box&nbsp;Kale&nbsp;Tofu!</Box></Box>)

  .add('align=stretch', () => <Box guide width={300} height={100} justify="center" align="stretch"><Box guide>Hello Avocado Banana</Box><Box guide>Flex Bacon Butter!</Box><Box guide>Box Kale Tofu!</Box></Box>)
  .add('align=baseline', () => <Box guide width={300} height={100} justify="center" align="baseline"><Box guide><h1>Hello Avocado Banana</h1></Box><Box guide><h3>Flex Bacon Butter!</h3></Box><Box guide>Box&nbsp;Kale&nbsp;Tofu!</Box></Box>)

  .add('(item props) flex=[1, 1, 1]', () => <Box guide width={300} height={100}><Box guide flex="1 1">Hello Avocado Banana</Box><Box guide flex="1">Flex Bacon Butter!</Box><Box guide flex="1">Box Kale Tofu!</Box></Box>)
  .add('(item props) flex=[5 1, 3 1, 1 1]', () => <Box guide width={300} height={100}><Box guide flex="5 1">Hello Avocado Banana</Box><Box guide flex="3 1">Flex Bacon Butter!</Box><Box guide flex="1 1">Box Kale Tofu!</Box></Box>)
  .add('(item props) vertical flex=[5 1, 3 1, 1 1]', () => <Box guide width={300} height={100} vertical><Box guide flex="5 1">Hello Avocado Banana</Box><Box guide flex="3 1">Flex Bacon Butter!</Box><Box guide flex="1 1">Box Kale Tofu!</Box></Box>)
  .add('(item props) alignSelf=[flex-start, flex-end]', () => <Box guide width={300} height={100}><Box guide flex="1" alignSelf="flex-start">Hello Avocado Banana</Box><Box guide flex="1">Flex Bacon Butter!</Box><Box guide flex="1" alignSelf="flex-end">Box Kale Tofu!</Box></Box>)
  .add('(item props) flex=[5 1 30px, 3 1 30px, 1 1 30px]', () => <Box guide width={300} height={100}><Box guide flex="5 1 30px">Hello Avocado Banana</Box><Box guide flex="3 1 30px">Flex Bacon Butter!</Box><Box guide flex="1 1 30px">Box Kale Tofu!</Box></Box>)
  .add('(item props) order=[2,-1,1]', () => <Box guide width={300} height={100}><Box guide flex="1" order={2}>Hello Avocado Banana</Box><Box guide flex="1" order={-1}>Flex Bacon Butter!</Box><Box guide flex="1" order={1}>Box Kale Tofu!</Box></Box>)
  

storiesOf('Btn', module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))

  .add('default', () => <Btn>Hello</Btn>)
  .add('default width=200', () => <Btn width={200}>Hello</Btn>)
  .add('default size=xs', () => <Btn size="xs">Hello</Btn>)
  .add('default size=s', () => <Btn size="s">Hello</Btn>)
  .add('default size=l', () => <Btn size="l">Hello</Btn>)
  .add('default color=success', () => <Btn color="success">Hello</Btn>)
  .add('default color=highlight', () => <Btn color="highlight">Hello</Btn>)
