@external("env", "notify")
    declare function notify(s: ArrayBuffer): i32;
@external("env", "add_user_query")
    declare function add_user_query(s: ArrayBuffer): void;

export function register_routes(): void {
    add_user_query(String.UTF8.encode("my_query", true));
}
export function my_query(arg: ArrayBuffer): void {
      let arr = new Uint8Array(4);
      arr[0] = 65;
      arr[1] = 66;
      arr[2] = 67;
      arr[3] = 0;
      notify(arr.buffer);
}
