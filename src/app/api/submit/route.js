export const runtime = 'edge';   // 适配 Cloudflare 边缘运行时

export async function POST(request) {
  const WEBHOOK_URL = process.env.WEBHOOK_URL;

  if (!WEBHOOK_URL) {
    console.error('Missing WEBHOOK_URL environment variable');
    return Response.json(
      { success: false, message: '服务器配置错误' },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const { name, phone, email, message } = body;

    if (!name || !phone) {
      return Response.json(
        { success: false, message: '姓名和电话为必填项' },
        { status: 400 }
      );
    }

    const content = `📩 嬴麓国际官网新留言\n姓名：${name}\n电话：${phone}\n邮箱：${email || '未填写'}\n留言：${message || '无'}\n时间：${new Date().toLocaleString('zh-CN')}`;

    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ msgtype: 'text', text: { content } }),
    });

    const result = await response.json();

    if (result.errcode === 0) {
      return Response.json({ success: true, message: '留言已提交，我们会尽快联系您' });
    } else {
      console.error('企业微信返回错误:', result);
      return Response.json(
        { success: false, message: result.errmsg || '提交失败，请稍后重试' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('API 内部错误:', error);
    return Response.json(
      { success: false, message: '服务器内部错误' },
      { status: 500 }
    );
  }
}