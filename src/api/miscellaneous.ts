module.exports = function (app: {
  get: (
    arg0: string,
    arg1: { (req: any, res: any): any; (req: any, res: any): any }
  ) => void;
}) {
  app.get(
    "/api/server_status",
    (req: any, res: { sendStatus: (arg0: number) => any }) =>
      res.sendStatus(200)
  );
  app.get("/api/ping", (req: any, res: { sendStatus: (arg0: number) => any }) =>
    res.sendStatus(200)
  );
};
