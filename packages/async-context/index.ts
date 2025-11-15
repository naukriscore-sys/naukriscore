class AsyncLocal {
  private static instance: AsyncLocal | null;
  private userId: string | null;

  private constructor() {
    this.userId = null;
  }

  public static getInstance(): AsyncLocal {
    if (!AsyncLocal.instance) {
      AsyncLocal.instance = new AsyncLocal();
    }
    return AsyncLocal.instance;
  }

  // Get userId anywhere in async call chain
  public getUserId(): string {
    return this.userId ? this.userId : "";
  }

  // Update userId in the current context
  public setUserId(userId: string) {
    this.userId = null;
    console.log(this.userId);
    console.log("userid in the set fn", userId);
    this.userId = userId;
  }
}

export const asyncLocal = AsyncLocal.getInstance();
