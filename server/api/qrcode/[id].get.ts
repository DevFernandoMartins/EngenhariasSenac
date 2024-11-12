import { pool } from '../../utils/db';
import QRCode from 'qrcode';

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id;
  
  try {
    const [rows] = await pool.execute('SELECT * FROM items WHERE id = ?', [id]);
    const items = rows as any[];
    
    if (items.length === 0) {
      throw createError({
        statusCode: 404,
        message: 'Item not found'
      });
    }

    const qrCode = await QRCode.toDataURL(id);
    
    return {
      item: items[0],
      qrCode
    };
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Database error'
    });
  }
});