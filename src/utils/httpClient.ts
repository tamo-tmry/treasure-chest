async function fetchData<T>(url: string): Promise<T> {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('データの取得に失敗しました');
    }
    return await response.json() as T;
  }